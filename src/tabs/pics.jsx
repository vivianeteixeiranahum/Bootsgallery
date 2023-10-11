import { Outlet } from 'react-router-dom';
import PageTitle from '../components/pageTitle';
import Image from '../components/image';

export default function Pics() {
  document.title = "Fotografias - BootsGallery"
  return (
  <div>
    <PageTitle title="Fotografias" subtitle="O mundo é a mais bela arte a nossa volta" background="https://upload.wikimedia.org/wikipedia/commons/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg" />
    <section className='d-flex flex-row flex-wrap col-lg-12 col-xl-6 mx-auto justify-content-around'>
      <Image src="https://img.freepik.com/fotos-gratis/pessoa-solitaria-caminhando-em-um-caminho-nas-colinas-do-alabama-na-california-com-o-monte-whitney_181624-37777.jpg?w=1380&t=st=1696285714~exp=1696286314~hmac=90cefa6c4d6fc785068182a39404171d336932904502768e3b83c22e48ca5a23" alt="Homem andando a uma paisagem de montanhas, Imagem de wirestock no Freepik" />
      <Image src="https://img.freepik.com/fotos-gratis/nuvem-branca-no-ceu-azul-e-mar_74190-4488.jpg?w=1380&t=st=1696285875~exp=1696286475~hmac=56e67e8ad24cd3527a4c30a95ea55d8a7718a66016aa0a26283429f412e33427" alt="Céu azul em meio a um mar infinito, Imagem de lifeforstock no Freepik" />
      <Image src="https://img.freepik.com/fotos-gratis/vista-aerea-complexa-da-cidade_23-2148975282.jpg?w=1380&t=st=1696285944~exp=1696286544~hmac=87de4f9e4eee776e7c967e674b3f5001a826d665475230c0f5ea7e1c0d34fde0" alt="Cidade moderna, com altos arranha-céus, Imagem de Freepik" />
      <Image src="https://th.bing.com/th/id/R.6fd7d34954e582db8205aba092c44245?rik=SUTaXRtF60%2fJ3g&riu=http%3a%2f%2f3.bp.blogspot.com%2f-UMpoBJYA-qA%2fVc92Krq3ZtI%2fAAAAAAAAA3Q%2fq8W-k2XrnpA%2fs1600%2fbeach_tropical_1920x1080.jpg&ehk=CcR%2b9nsKzpBulSwZkt2wvmjci7uxs0dcNiPm1Y0XzYw%3d&risl=&pid=ImgRaw&r=0" alt="Fotografia bonita de Praia" />
      <Image src="https://th.bing.com/th/id/OIP.-xU-eiT72H6g_5CwD9iK_gHaEo?pid=ImgDet&rs=1" alt="Foto linda de uma Flor muito linda" />
      <Image src="https://f088b146830a59b5.cdn.gocache.net/uploads/noticias/2020/03/10/ud43l9jqlevq.jpg" alt="Foto de Céu Estrelado" />
      <Image src="https://i0.wp.com/agendasettingdiario.com/wp-content/uploads/2019/06/Comida-chatarra.jpg?resize=2048%2C1363&ssl=1" alt="Foto de um Delicioso lanche com batata" />
      <Image src="https://i.pinimg.com/originals/93/18/a3/9318a3a059a4d1d7711b330643b3ab1c.jpg" alt="Fotografia da nossa Linda Terra" />
      <Image src="https://i.pinimg.com/originals/9d/84/d0/9d84d0604192a14b404a2627e14a4f9d.jpg" alt="Foto aesthetic" />
      <Image src="https://3.bp.blogspot.com/-u6I5iKGulS0/Wu4A0bpIxCI/AAAAAAAAZ3c/lsoYXdzyFEEKGzIXHol623ULFqRmfccJwCLcBGAs/s1600/marr.jpg" alt="Homem Surfando uma Onda" />
      <Image src="https://th.bing.com/th/id/OIP.tThwM55zLJSb5F2JrCIzpAHaF6?pid=ImgDet&rs=1" alt="Foto fofinha de Gatinho" />
      <Image src="https://3.bp.blogspot.com/-2zXiVaFUodI/WDtA9uJM7JI/AAAAAAAAMa4/QoT9xATCJq4pM8usIAjTMwdZX-uisGM0QCLcB/s1600/Imagem-de-arvore.jpg" alt="Foto de uma linda IPE" />
      <Image src="https://i.pinimg.com/736x/97/94/0d/97940d452ae2b83e5ab1b96b21d537c6.jpg" alt="Foto de Carro bonito" />
      <Image src="https://th.bing.com/th/id/OIP.Lnf0OLozCdVIxpXfPU0VUwHaG9?pid=ImgDet&rs=1" alt="Foto de maquiagens"/>
    </section>

  <Outlet />
</div>
  )
}