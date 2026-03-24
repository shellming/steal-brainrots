import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';

// Define Tailwind classes for each element type
const elementClasses: Record<string, string> = {
  h2: 'text-2xl font-bold text-slate-100 mt-8 mb-4 first:mt-0 scroll-mt-24',
  h3: 'text-xl font-semibold text-slate-200 mt-6 mb-3',
  p: 'leading-relaxed mb-4 text-base text-slate-300',
  ul: 'list-disc pl-6 mb-4 space-y-2 text-slate-300',
  ol: 'list-decimal pl-6 mb-4 space-y-2 text-slate-300',
  li: 'pl-1 marker:text-slate-500',
  strong: 'text-slate-100 font-bold',
  blockquote: 'border-l-4 border-slate-600 pl-4 italic text-slate-400 my-4'
};

function rehypeAddClasses() {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      const tagName = node.tagName;
      if (elementClasses[tagName]) {
        node.properties = node.properties || {};
        node.properties.className = node.properties.className || [];
        // Handle existing classes if any
        if (typeof node.properties.className === 'string') {
          node.properties.className = node.properties.className.split(' ');
        }
        
        const classesToAdd = elementClasses[tagName].split(' ');
        node.properties.className.push(...classesToAdd);
      }
    });
  };
}

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug) // Automatically generate IDs for headings
    .use(rehypeAddClasses) // Add Tailwind classes
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
