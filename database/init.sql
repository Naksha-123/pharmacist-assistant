CREATE TABLE prescriptions (
    id SERIAL PRIMARY KEY,
    extracted_text TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'Pending'
);
