import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import GetUsersAPI from './api/GetUsersAPI';
import Header from '../../../Shared/UI/Header';
import { User_T } from '../../../Shared/lib/types';
import ChangeAccessAPI from './api/GrantAccessAPI';
import Menu from '../../../Shared/UI/Menu';
import SearchInput from '../../../Shared/UI/SearchInput';
import styles from './lib/styles.module.css'
import MainTemplate from '../../../Templates/MainTemplate';
import { useNavigate } from 'react-router-dom';

const AccessControlPage = () => {
    let [users, setUsers] = useState([
        { login: 'Jack Peterson', role: 'MANAGER' }
    ])
    const SetAccess = async (user: User_T, action: boolean) => {
        let response
        if(action) {
            response = await ChangeAccessAPI(user.id, 'MANAGER')
        } else {
            response = await ChangeAccessAPI(user.id, 'USER')
        }
        if (response.status === 200) {
            let response2 = await GetUsersAPI()
            if (response2.status === 200) {
                setUsers(response2.data.users)
            }
        }
    }
    useEffect(() => {
        let a = async () => {
            try {
                let response = await GetUsersAPI()
                if (response.status === 200) {
                    setUsers(response.data.users)
                }
            } catch (e) {
                console.log(e)
            }
        }
        a()
    }, [])
    const columns = [
        {
            title: 'Логин',
            dataIndex: 'login',
            key: 'login',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Статус',
            dataIndex: 'role',
            key: 'role',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Действие',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, data: User_T) =>
                (data.role !== 'USER') ?
                    <Button style={{ width: '200px' }} key={data.id} onClick={() => { SetAccess(data, false) }} type='primary' danger>Лишить прав</Button>
                    :
                    <Button style={{ width: '200px' }} key={data.id} onClick={() => { SetAccess(data, true) }}>Предоставить доступ</Button>
        },
    ];
    return <>
        <MainTemplate
            BodyChildren={<Table columns={columns} dataSource={users} />}
            MenuChildren={<>
                <SearchInput />
                <Button>Поиск</Button>
            </>} />
    </>

}

export default AccessControlPage