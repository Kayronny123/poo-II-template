import { TUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    public static TABLE_USERS ="users" 

    public async findUser(q: string | undefined): Promise<TUserDB[]>{
           let usersDB
        if (q) {
            const result: TUserDB[] = await UserDatabase.connection(UserDatabase.TABLE_USERS).where("name", "LIKE", `%${q}%`)
            usersDB = result
        } else {
            const result: TUserDB[] = await UserDatabase.connection(UserDatabase.TABLE_USERS)
            usersDB = result
        }
        return usersDB
    }
    public async findUserById(id: string | undefined): Promise <TUserDB | undefined>{
        const [ userDBExists ]: TUserDB[] | undefined[] = await UserDatabase.connection(UserDatabase.TABLE_USERS).where({ id })
    return userDBExists
    }
    public async insertUser(newUserDB: TUserDB | undefined): Promise <void>{
        await UserDatabase.connection(UserDatabase.TABLE_USERS).insert(newUserDB)
    }
}