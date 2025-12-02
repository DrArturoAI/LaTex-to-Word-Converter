import React from 'react';

interface PreviewPaneProps {
    htmlContent: string | null;
    isLoading: boolean;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ htmlContent, isLoading }) => {
    return (
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-lg h-full flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Live Preview</h2>
            </div>
            <div className="flex-grow p-1 bg-slate-100 dark:bg-slate-900 rounded-b-lg">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                            <div className="w-8 h-8 mx-auto border-4 border-t-4 border-slate-200 dark:border-slate-600 border-t-indigo-600 rounded-full animate-spin"></div>
                            <p className="mt-4 text-slate-500 dark:text-slate-400">Generating preview...</p>
                        </div>
                    </div>
                ) : htmlContent ? (
                    <iframe
                        srcDoc={htmlContent}
                        title="Document Preview"
                        className="w-full h-full border-0 bg-white"
                        sandbox="allow-same-origin" // Sandboxing for security
                    />
                ) : (
                    <div className="flex items-center justify-center h-full p-4">
                        <div className="text-center text-slate-500 dark:text-slate-400 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 w-full">
                            <p>Converted document preview will appear here.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviewPane;
