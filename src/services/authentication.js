import conf from '../config/conf';
import { Client, Account, ID } from "appwrite";


/**
 * Represents an authentication service.
 */
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    /**
     * Creates a new user account.
     * @param {Object} userData - The user data.
     * @param {string} userData.email - The user's email.
     * @param {string} userData.password - The user's password.
     * @param {string} userData.name - The user's name.
     * @returns {Promise} A promise that resolves with the created user account or rejects with an error.
     */
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Logs in a user.
     * @param {Object} credentials - The user's credentials.
     * @param {string} credentials.email - The user's email.
     * @param {string} credentials.password - The user's password.
     * @returns {Promise} A promise that resolves with the user session or rejects with an error.
     */
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retrieves the current user.
     * @returns {Promise} A promise that resolves with the current user or null if there is an error.
     */
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    /**
     * Logs out the current user.
     */
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

