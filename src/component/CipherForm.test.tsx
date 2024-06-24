
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CipherForm from './CipherForm';

describe('CipherForm Component', () => {
    test('renders text area and input fields', () => {
        render(<CipherForm />);
    
        const textArea = screen.getByPlaceholderText('Enter text to encrypt/decrypt');
        const keyInput = screen.getByPlaceholderText('Enter encryption/decryption key (1-25)');
    
        expect(textArea).toBeInTheDocument();
        expect(keyInput).toBeInTheDocument();
    });

    test('handles encryption and decryption', () => {
        render(<CipherForm />);

        const textArea = screen.getByPlaceholderText('Enter text to encrypt/decrypt');
        const keyInput = screen.getByPlaceholderText('Enter encryption/decryption key (1-25)');
        const encryptButton = screen.getByText('Encrypt');
        const decryptButton = screen.getByText('Decrypt');

        fireEvent.change(textArea, { target: { value: 'Hello, World!' } });
        fireEvent.change(keyInput, { target: { value: '3' } });

        fireEvent.click(encryptButton);

        const encryptedText = screen.getByText('Encrypted Text:');
        expect(encryptedText).toBeInTheDocument();

        // Decrypt
        fireEvent.click(decryptButton);

        // Check decrypted text
        const decryptedText = screen.getByText('Decrypted Text:');
        expect(decryptedText).toBeInTheDocument();
    });
});
