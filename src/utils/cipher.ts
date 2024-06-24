const ALPHABET_SIZE = 26;

export function encrypt(text: string, key: number): string {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            if (char === char.toUpperCase()) {
                char = String.fromCharCode(((code - 65 + key) % ALPHABET_SIZE) + 65);
            } else {
                char = String.fromCharCode(((code - 97 + key) % ALPHABET_SIZE) + 97);
            }
        }

        result += char;
    }

    return result;
}

export function decrypt(text: string, key: number): string {
    return encrypt(text, ALPHABET_SIZE - (key % ALPHABET_SIZE));
}
