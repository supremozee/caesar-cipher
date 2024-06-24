"use client"
import React, { useState } from 'react';
import { decrypt, encrypt } from '@/utils/cipher';
import './form.scss'; 

const CipherForm: React.FC = () => {
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleEncrypt = () => {
        if (!text || !key) return;
        const encrypted = encrypt(text, parseInt(key, 10));
        setEncryptedText(encrypted);
        setDecryptedText('');
    };

    const handleDecrypt = () => {
        if (!encryptedText || !key) return;
        const decrypted = decrypt(encryptedText, parseInt(key, 10));
        setDecryptedText(decrypted);
    };

    return (
        <div className="space-y-4">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to encrypt/decrypt"
                style={textAreaStyle}
            ></textarea>
            <input
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Enter encryption/decryption key (1-25)"
                style={inputStyle}
            />
            <div style={buttonContainer}>
                <button
                    onClick={handleEncrypt}
                    className="btn-primary"
                    style={buttonStyle}
                >
                    Encrypt
                </button>
                <button
                    onClick={handleDecrypt}
                    className="btn-secondary"
                    style={buttonStyle}
                >
                    Decrypt
                </button>
            </div>
            {encryptedText && (
                <div className="bg-gray-200 p-3 rounded-lg" style={boxStyle}>
                    <p className="text-gray-900 font-semibold">Encrypted Text:</p>
                    <textarea
                        value={encryptedText}
                        readOnly
                        style={textAreaStyle}
                    ></textarea>
                </div>
            )}
            {decryptedText && (
                <div className="bg-gray-200 p-3 rounded-lg" style={boxStyle}>
                    <p className="text-gray-900 font-semibold">Decrypted Text:</p>
                    <textarea
                        value={decryptedText}
                        readOnly
                        style={textAreaStyle}
                    ></textarea>
                </div>
            )}
        </div>
    );
};

// Inline styles
const textAreaStyle = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    color: '#1a202c',
    backgroundColor: '#ffffff',
    borderRadius: '0.375rem',
    border: '1px solid #e2e8f0',
    outline: 'none',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    ':focus': {
        borderColor: '#48bb78',
        boxShadow: '0 0 0 0.2rem rgba(72, 187, 120, 0.25)',
    },
};

const buttonContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '5rem'
};

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    color: '#1a202c',
    backgroundColor: '#ffffff',
    borderRadius: '0.375rem',
    border: '1px solid #e2e8f0',
    outline: 'none',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    ':focus': {
        borderColor: '#48bb78',
        boxShadow: '0 0 0 0.2rem rgba(72, 187, 120, 0.25)',
    },
};

const buttonStyle = {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out',
};

const boxStyle = {
    backgroundColor: '#edf2f7',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    marginTop: '1rem',
};

export default CipherForm;
