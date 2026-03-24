import React from 'react';
import { Layout } from '@/components/Layout';
import { MainName } from '@/lib/helper';

export const metadata = {
    title: `Privacy Policy - ${MainName}`,
    description: `Privacy Policy for ${MainName}`,
    alternates: {
        canonical: '/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p className="text-slate-300">
                            Welcome to {MainName}. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-white mb-4">2. Data We Collect</h2>
                        <p className="text-slate-300">
                            We do not collect any personal data from our users. We may use local storage to save your game progress locally on your device.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-white mb-4">3. Third-Party Links</h2>
                        <p className="text-slate-300">
                            This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
