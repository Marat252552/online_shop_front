import React, { useState } from 'react';
import { Pagination } from 'antd';

const PaginationF = (props: {total: number, setOffset: any, limit: number}) => {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination defaultCurrent={1} total={props.total} defaultPageSize={5} onChange={(page) => { props.setOffset((page - 1) * props.limit) }} onShowSizeChange={(e, e2) => console.log(e, e2)} />
    </div>
}

export default PaginationF;