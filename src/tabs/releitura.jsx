import { Outlet } from 'react-router-dom';
import PageTitle from '../components/pageTitle';
import Image from '../components/image';

export default function Releitura(){
    document.title = 'Releituras - BootsGallery'
    return(
        <div>
            <PageTitle title="Releituras" subtitle="Arte dentro da arte" background="https://i.pinimg.com/564x/11/79/9d/11799dc2dbab59340bbe0ea5958c2fef.jpg" />
            <section className='d-flex flex-row flex-wrap col-lg-12 col-xl-6 mx-auto justify-content-around'>
                <Image src="https://th.bing.com/th/id/OIP.4kjZfcOlqKXIzchGGBumaQAAAA?pid=ImgDet&w=450&h=683&rs=1" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://i.pinimg.com/736x/98/29/3a/98293a80ee144b522e9de3396f09f835--edvard-munch-batman.jpg"alt="Recriação da Pintura O Grito com O Batman" />
                <Image src="http://1.bp.blogspot.com/-xxxsZkm5p0w/TgIuiSMjvTI/AAAAAAAAAdU/MWhAoATuxhU/s400/releit01.bmp" alt="Recriação da Pintura Monalisa com A Mônica de turma da Mônica" />
                <Image src="https://api.artsticker.app/images/work/20308_163644926232765_l.jpg?421df3a05e5adcc9" alt="Recriação da Pintura Moça com brincos de pérolas com um Gatinho" />
                <Image src="https://www.lifebites.bg/wp-content/uploads/2017/08/tumblr_myhjudYkt81tngen9o1_500-375x483.png" alt="Recriação da Pintura de Frida Kahlo com o celular" />
                <Image src="https://i.pinimg.com/originals/bf/d7/5a/bfd75a4f1be74c91b498a61afedffa01.jpg" alt="Recriação de gatinho" />
                <Image src="https://i.pinimg.com/originals/e5/04/ec/e504ec37ce452c9a2df3149c9fc14117.jpg" alt="Recriação da Pintura A percistencia da memória por Gatinhos" />
                <Image src="https://images.squarespace-cdn.com/content/v1/51e335d5e4b0a4450d9644a2/1374366396719-Q21DEOZMI2M1S9EVQLWF/Smaller_God_Superman+2012.jpg?format=500w" alt="Recriação da Pintura de A criação de Adão" />
                <Image src="https://img.etsystatic.com/il/3c59c9/1292215868/il_fullxfull.1292215868_r7ll.jpg?version=0" alt="Recriação da Pintura A noite estrelada com o Batman" />
                <Image src="https://th.bing.com/th/id/OIP.apVWNaqXGlRBoQLIzfdEvAHaHa?pid=ImgDet&rs=1" alt="Recriação da Pintura Velho da tristeza Com um homem" />
                <Image src="https://th.bing.com/th/id/R.120ddfaf58ea651271044cbc13eae7d9?rik=340Rn7v0QanD%2bg&riu=http%3a%2f%2fsomentecoisaslegais.com.br%2fwp-content%2fuploads%2f2015%2f06%2fmagritte.png&ehk=KMsXngjoSmUoRoH5Nzy7AnXPaWmPLchErmNjdw6nm6I%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Recriação da Pintura O filho do Homem com Iphone" width="100px" />
                <Image src="https://mott.pe/noticias/wp-content/uploads/2016/01/20-parodias-de-clasicas-pinturas-de-la-historia-2.jpg" alt="Recriação da Pintura da Afrodite com super heróis da Marvel" />
                <Image src="https://mott.pe/noticias/wp-content/uploads/2016/01/20-parodias-de-clasicas-pinturas-de-la-historia-17.jpg" alt="Recriação da Pintura Las meninas com a Cinderela" />
                <Image src="https://mott.pe/noticias/wp-content/uploads/2016/01/20-parodias-de-clasicas-pinturas-de-la-historia-12.jpg" alt="Recriação da Pintura La Thérapeute com o Piu Piu" />
                <Image src="https://mott.pe/noticias/wp-content/uploads/2016/01/20-parodias-de-clasicas-pinturas-de-la-historia-18.jpg" alt="Recriação da Pintura La Galinha Cega com a Bela de a Bela e a Fera" />
            </section>
            <Outlet/>
        </div>
    );
}