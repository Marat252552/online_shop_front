import React from 'react';
import { Pagination } from 'antd';

const PaginationF = () => {
    return <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '5px'}}>
        <Pagination defaultCurrent={1} total={50} />
    </div>
}

export default PaginationF;