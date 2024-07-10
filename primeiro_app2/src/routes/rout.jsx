import image from "./img/image"
export default function Root(){
    return (
        <div id="conteudo">
           <div className="login-page">
               <img src={image} alt="logo" />
                <p>Para acessar o sistema, faça login</p>
           </div>
        </div>
    )
}