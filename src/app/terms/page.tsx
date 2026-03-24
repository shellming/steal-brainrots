import React from 'react';
import { Layout } from '@/components/Layout';
import { MainName } from '@/lib/helper';

export const metadata = {
    title: `Terms of Service - ${MainName}`,
    description: `Terms of Service for ${MainName}`,
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsPage() {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                        <p className="text-slate-300">
                            By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-white mb-4">2. Intellectual Property</h2>
                        <p className="text-slate-300">
                            The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-white mb-4">3. Disclaimer</h2>
                        <p className="text-slate-300">
                            The materials on {MainName}'s website are provided on an 'as is' basis. {MainName} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
