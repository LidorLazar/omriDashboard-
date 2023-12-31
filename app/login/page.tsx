'use client'
import Image from "next/image";
import deliveryImage from '../../public/deliver.png'
import {FaUser} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import {FormEvent} from "react";
import {signIn} from "next-auth/react";


export default function Login() {

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        signIn('credentials', {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false,
        })
    }


    return (
        <section dir={'rtl'} className={'flex flex-col w-full h-screen items-center justify-center'}>
            <article className={'h-2/4 w-full items-center justify-center flex flex-col gap-2 '}>
                <h2 className={'font-bold text-2xl'}>התחברות</h2>
                <form className={'flex flex-col gap-5'} onSubmit={handleSubmit}>
                    <div className={'flex items-center relative'}>
                        <input type="text" placeholder={'שם משתמש'} className={'placeholder:px-8 border-black' +
                            ' border-2 rounded-xl'} name={'username'}/>
                        <FaUser className={'absolute right-2'}/>
                    </div>
                    <div className={'flex items-center relative'}>
                        <input type="password" placeholder={'סיסמא'} className={'placeholder:px-8 border-black' +
                            ' border-2 rounded-xl'} name={'password'}/>
                        <RiLockPasswordFill className={'absolute right-2'}/>

                    </div>
                    <button className={'bg-red-400 rounded-xl'}>
                        כניסה
                    </button>
                </form>

            </article>
            <article className={'w-full h-auto flex absolute bottom-0 justify-end '}>
                <Image src={deliveryImage} alt={'deliveryImage'} title={'deliveryImage'} className={'animate-wiggle'}/>
            </article>
        </section>
    )
}