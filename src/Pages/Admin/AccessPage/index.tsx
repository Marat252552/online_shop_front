import React, { useEffect, useRef, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import GetUsersAPI from './api/GetUsersAPI';
import Header from '../../../Shared/UI/Header';
import { User_T } from '../../../Shared/lib/types';
import ChangeAccessAPI from './api/GrantAccessAPI';
import Menu from '../../../Shared/UI/Menu';
import styles from './lib/styles.module.css'
import MainTemplate from '../../../Templates/MainTemplate';
import { useNavigate } from 'react-router-dom';
import Tags from '../../../Shared/UI/Tags';
import PaginationF from '../../../Shared/UI/Pagination/pagination';
import Form from '../../../Shared/UI/formComponents/form';
import { useForm } from 'react-hook-form';
import SearchInput from '../../../Shared/UI/SearchInput';

const AccessControlPage = () => {
    let [offset, setOffset] = useState(0)
    let [limit, setLimit] = useState(5)
    let [total, setTotal] = useState(0)
    let [tags, setTags] = useState(['USER', 'MANAGER'])
    let [users, setUsers] = useState([
        { login: 'Jack Peterson', role: 'MANAGER' }
    ])
    let [tagsData, setTagsData] = useState<Array<{ value: string, name: string }>>([
        { value: 'USER', name: 'Пользователи' },
        { value: 'MANAGER', name: 'Менеджеры' },
    ])
    let [searchValue, setSearchValue] = useState('')
    let fetchUsers = async () => {
        try {
            let response = await GetUsersAPI(tags, searchValue, offset, limit)
            if (response.status === 200) {
                setUsers(response.data.users)
                setTotal(response.data.usersAmount)
            }
        } catch (e) {
            console.log(e)
        }
    }
    const SetAccess = async (user: User_T, action: boolean) => {
        let response
        if (action) {
            response = await ChangeAccessAPI(user.id, 'MANAGER')
        } else {
            response = await ChangeAccessAPI(user.id, 'USER')
        }
        if (response.status === 200) {
            fetchUsers()
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [offset, limit, tags, searchValue])
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
            MenuChildren={<>
                <SearchInput setSearchValue={setSearchValue} />
                <Tags name='Категории' tagsData={tagsData} setTags={setTags} />
            </>}>
            <>
                <PaginationF limit={limit} setOffset={setOffset} total={total} />
                <Table pagination={false} columns={columns} dataSource={users} />
            </>
        </MainTemplate>
    </>
}

export default AccessControlPage