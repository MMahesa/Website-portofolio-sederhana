import React, { ReactNode } from 'react';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

interface AlertProps {
    type?: "success" | "error" | "info";
    children: ReactNode;
    className?: string;
}


const Alert: React.FC<AlertProps> = ({ type = "info", children, className = "" }) => {

    let icon, colorClass;
    switch (type) {
        case "success":
            icon = <CheckCircle className="text-green-500 w-5 h-5" />;
            colorClass = "bg-green-50 text-green-800 border-green-200";
            break;
        case "error":
            icon = <AlertCircle className="text-red-500 w-5 h-5" />;
            colorClass = "bg-red-50 text-red-800 border-red-200";
            break;
        case "info":
        default:
            icon = <Info className="text-blue-500 w-5 h-5" />;
            colorClass = "bg-blue-50 text-blue-800 border-blue-200";
            break;
    }

    return (
        <div className={`flex items-center p-4 border rounded-lg ${colorClass} ${className}`}>
            <span className="mr-3">{icon}</span>
            <span>{children}</span>
        </div>
    );
};

// AlertDescription untuk teks deskripsi pesan di dalam Alert
const AlertDescription: React.FC<{ children: ReactNode }> = ({ children }) => (
    <span>{children}</span>
);

export { Alert, AlertDescription };
