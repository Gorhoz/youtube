import  '../Styles/Youtube.css'
import Navbar from './Navbar'
import {BrowserRouter} from 'react-router-dom';
import userImg from '../User.jpg'
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { BiListPlus } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";



function Video () {
    const video = {
        name: 'Sigur Rós - Hjartað Hamast (Bamm Bamm Bamm)',
        url: "https://www.youtube.com/embed/ww_g-h3mf2c?si=3lOXmnMjlzhhLU_B",
        title: "YouTube video player",
        uploaderName: 'GothicRichie',
        subscriptions: 100,
        views: '236k',
        uploaded: 2011,
        likes: '1.5k',
        comments: [{
            user:'@charliequinn1859',
            img: 'https://yt3.ggpht.com/ytc/APkrFKa4V4IiX11O1X7TrJUZCVFTorCa1PWG9kSpTxhv=s48-c-k-c0x00ffffff-no-rj',
            comment: "This is the first song of theirs I'd ever heard, and it remains my favorite.  Not just my favorite of theirs, but my favorite song.  Ever.",
            likes: 24        
            },
            {
                user:'@AtlasBlizzard',
                img: 'https://yt3.ggpht.com/ytc/APkrFKajJZRjAOPj1v34aaIsHj2nRjlY-yazou3NwIeb=s48-c-k-c0x00ffffff-no-rj',
                comment: "This is a bombastic song. As an Icelander, I can say that the lyrics are some of the most emotionally searing I've ever heard. They compliment the volcanic, emotionally ravaging music perfectly. Indescribable.",
                likes: 61        
                },
            {
                user:'@lukevella388',
                img: 'https://yt3.ggpht.com/ytc/APkrFKa5_kPM-MaDAHjNNv96VoyeT31s5rz5yEjU8yyt_P4=s48-c-k-c0x00ffffff-no-rj',
                comment: "It's a pity that such a mesmerising song is never (can't, most probably) played live. Damn, I would be such a different human being had I never got into Sigur Ros.",
                likes: 28        
                },
        ]
    }
    return(
        <div>
            <Navbar />        
            <div className="center">
             <iframe width="560" height="315" src={video.url} title={video.title}></iframe>
            </div>
            <h2>{video.name}</h2>
            <div className='centered'>
                <button className='button-small'>
                    <BrowserRouter to="/">
                        <img className='user-image'
                        src={userImg}
                        alt="user image"
                    />
                    </BrowserRouter>
                </button>
                <div>
                    <h4>{video.uploaderName}</h4>
                    <p className='grey'>{video.subscriptions} subscribers</p>
                </div>
                <button className='button-black'>
                    <BrowserRouter to="/">
                        Subscribe
                    </BrowserRouter>
                </button>
                <button className='button-grey'>
                    <AiOutlineLike className='icon-medium'/> <span className='likes'>{video.likes}  <span className="black-dash"> |</span>   </span> <AiOutlineDislike className='icon-medium'/>
                </button>
                <button className='button-grey'>
                    <PiShareFatThin className='icon-medium'/> <span className='black-text'>Share </span>
                </button>
                <button className='button-grey'>
                    <BiListPlus className='icon-medium'/> <span className='black-text'>Save </span>
                </button>
                <button className='button-round'>...</button>

            </div>
            <div className='shady'>
                <p className='righter'>{video.views} views   13 years ago</p>
                <p className='righter'>... more</p>
            </div>            
            <h3 className='left'>101 Comments <MdOutlineSort /> <span className='sort'>Sort by </span></h3>
            <div className='left'>
                <button className='button-small'>
                <BrowserRouter to="/">
                    <img className='user-image'
                    src='https://yt3.ggpht.com/yti/ADpuP3N-_oY9ZDhTIiCLatTjhjoDjaWV7t9QN6-1_ilwgg=s48-c-k-c0x00ffffff-no-rj'
                    alt="user image"
                />
                </BrowserRouter>                
                </button>  
                <input className='comment-input' type="text" name="name" value='Add a comment'/>
                <br />                
                {video.comments.map((com, i)=> (
                    <div key={i} className='left'>
                        <button className='button-small'>
                            <BrowserRouter to="/">
                                <img className='user-image'
                                src={com.img}
                                alt="user image"
                                />
                            </BrowserRouter>                
                        </button> <span className='bold'>{com.user}</span>                        
                        <p>{com.comment}</p>
                        <AiOutlineLike className='icon-small'/> <span className='likes-grey'>{com.likes} </span> <AiOutlineDislike className='icon-small'/> <span className='ilikes-grey'>Reply</span>
                    </div>
                ))}          
            </div>

        </div>
    )

}

export default Video