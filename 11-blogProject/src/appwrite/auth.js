import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// for better code practice we are gonna create do all funclallity withnthe help of a class and 
// onject fo that class

export class AuthService {
    client = new Client(); // ynha pr endpoint set kiye ja skte the but that will be 
    // wastage of resourcees kyunki me chahta hu ki jb object bne tabhi hi sari cheeze use
    // ho isliye object creation pr constructor call hota hai to by constructor sb kuchh krenge

    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const user = await this.account.create(ID.unique(), email, password, name)
            if(!user){ console.log('user error')
             return null};
            // else login krva denge
        }catch(error){
            throw error
        }
    }

    async login({email, password}) {
        
    }
}

const authService = new AuthService();

export default authService;
