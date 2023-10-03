import { Outlet } from 'react-router-dom';
import PageTitle from '../components/pageTitle';
import Image from '../components/image';

export default function Releitura(){
    document.title = 'Releituras - BootsGallery'
    return(
        <div>
            <PageTitle title="Releituras" subtitle="Arte dentro da arte" background="https://i.pinimg.com/564x/11/79/9d/11799dc2dbab59340bbe0ea5958c2fef.jpg" />
            <section className='d-flex flex-row flex-wrap col-lg-12 col-xl-6 mx-auto justify-content-around'>
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/564x/7c/fb/6a/7cfb6a5c5885dbc5c030ab3987d08227.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
            </section>
            <Outlet/>
        </div>
    );
}