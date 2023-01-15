import React, {useEffect, useContext, useState} from 'react';
import {IUser} from '../models/IUser'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Button} from 'antd'
import UserService from '../service/UserService'



const GetUsers: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    async function getUsers(){
        try{
          const response = await UserService.fetchUsers()
          setUsers(response.data)
        }
        catch(e) {
          console.log(e)
        }
      }

    function hideUsers(){
        setUsers([] as IUser[])
    }
    
    if (users.length > 0){
        return(
        <div> 
        <Button type="primary" htmlType="submit" onClick={() => hideUsers()}>
            Hide Users
        </Button>
        {users.map(
            user => <div key={user.id}>{user.email}</div>
        )}
        </div>
        )
    }

    return (
    <div>
        
        <Button type="primary" htmlType="submit" onClick={() => getUsers()}>
            Get Users
        </Button>
        {users.map(
            user => <div key={user.id}>{user.email}</div>
        )}
    </div>
     )
}


export default observer(GetUsers);