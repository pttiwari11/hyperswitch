-- Your SQL goes here
ALTER TABLE payment_methods ADD COLUMN IF NOT EXISTS client_secret VARCHAR(128) DEFAULT NULL;
