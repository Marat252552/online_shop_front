import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import GetUsersAPI from './api/GetUsersAPI';
import Header from '../../../../Shared/models/Header';
import { User_T } from '../../../../Shared/lib/types';
import ChangeAccessAPI from './api/GrantAccessAPI';


const AccessControlPage = () => {
    let [users, setUsers] = useState([
        {login: 'Jack Peterson', role: 'MANAGER'}
    ])
    const GrantAccess = async (user: User_T) => {
        let response = await ChangeAccessAPI(user.id, 'MANAGER')
        if(response.status === 200) {
            let response2 = await GetUsersAPI()
                if(response2.status === 200) {
                    setUsers(response2.data.users)
                }
        }
    }
    const LowerAccess = async (user: User_T) => {
        let response = await ChangeAccessAPI(user.id, 'USER')
        if(response.status === 200) {
            let response2 = await GetUsersAPI()
                if(response2.status === 200) {
                    setUsers(response2.data.users)
                }
        }
    }
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
              (data.role !== 'USER')?
              <Button style={{width: '200px'}} key={data.id} onClick={() => {LowerAccess(data)}} type='primary' danger>Лишить прав</Button>
              :
              <Button style={{width: '200px'}} key={data.id} onClick={() => {GrantAccess(data)}}>Предоставить доступ</Button>
              
        },
      ];
    useEffect(() => {
        let a = async() => {
            try {
                let response = await GetUsersAPI()
                if(response.status === 200) {
                    setUsers(response.data.users)
                }
            } catch(e) {
                console.log(e)
            }
        }
        a()
    }, [])
    return <div>
        <Header />
        <Table columns={columns} dataSource={users} />
    </div>
    
}

export default AccessControlPage