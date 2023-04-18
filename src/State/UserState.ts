import {makeAutoObservable} from 'mobx'
import { User_T } from '../Shared/lib/types'

class UserState {
    private _isAuth
    private _user = {} as User_T
    constructor() {
        this._isAuth = false
        this._user = {} as User_T
        makeAutoObservable(this)
    }
    setIsAuth(value: boolean) {
        this._isAuth = value
    }
    getIsAuth() {
        return this._isAuth
    }
    logout() {
        this._isAuth = (false)
        this._user = {
            id: 0,
            login: '',
            role: '',
            basket: {
                id: 0
            }
        }
    }
    setUser(user: any) {
        this._user = user
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}

export default UserState