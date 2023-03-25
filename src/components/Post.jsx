import React from 'react';
import MyButton from './UI/MyButton/MyButton'
import DivInput from './DivInput'
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const history = useNavigate();

    return (
        <div className='App'>
            <div className='DivInput'>
                <div className='Login'>
                    <DivInput name='Логин'/>
                </div>
                <DivInput name='Пароль'/>
            </div>

            <div className='DivButtons'>
                <MyButton onClick={() => history('/main')}>Вход</MyButton>
                <MyButton onClick={() => history('/main1')}>Вход РП</MyButton>
                <MyButton>Вход ПО</MyButton>
                <MyButton>Вход HR</MyButton>
            </div>
            <a className='LoginA' href='#'>Забыли пароль</a>
        </div>
    );
};

export default Post;

