import React from 'react'
// import boxes from './boxes'
// import Box from './Box'
// import Form from './Form'

export default function Meme(){

    let [memeImage, setMemeImage] = React.useState({
        toptext: '',
        bottomText: '',
        memeUrl: 'logo192.png'
    });

    let [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes").then((response)=> response.json()).then(data=> setAllMemes(data.data.memes));

    },[])
    // let [squares, setSquares] = React.useState(boxes);
    
    const getMemeUrl = () => {
        const index = Math.floor(Math.random()* allMemes.length);
        const url = allMemes[index].url;
        console.log(url);
        setMemeImage((preValue)=> {
            return {
                ...preValue, memeUrl: url
            }
        });
    }

    // const toggle = (id) => {
    //     setSquares(preValue => {
    //         // const newSquares = [];
    //         // for(let i = 0; i<preValue.length; i++){
    //         //     if(preValue[i].id === id){
    //         //         const updatedSquare = {
    //         //             ...preValue[i], on: !preValue[i].on
    //         //         }
    //         //         newSquares.push(updatedSquare);
    //         //     } else {
    //         //         newSquares.push(preValue[i])
    //         //     }
    //         // }
    //         // return newSquares
    //         return preValue.map((square)=> {
    //             return square.id === id ? {...square, on: !square.on} : square
    //         })
    //     })
    // }

    // const squareElements = squares.map((square)=> {
    //     return(
    //         <Box 
    //         key={square.id}
    //         id={square.id}
    //         on={square.on}
    //         toggle={toggle}
    //         />
    //     )
    // })

    // const [messages, setMessages] = React.useState(['a', 'b']);

    const [formData, setFormData] = React.useState({
        field1: 'Top Text',
        field2: 'Bottom Text'
    })

    const handleChange =(event)=> {
        const {name, value} = event.target
        setFormData(preValue => {
            return{
                ...preValue,
                [name]: value
            }
        })
    }

    return (
        <main>
            {/* {squareElements} */}
            {/* <div>
                {messages.length > 0 ? 
                <h1>You have {messages.length} unread {messages.length === 1 ? "message" : "messages"}</h1> :
                <h1>You're All Caught Up</h1>}
            </div> */}
            {/* <Form /> */}
            <div className='form'>
                <input onChange={handleChange} type="text" name="field1" className="formInput" placeholder="Enter Text" value={formData.field1}/>
                <input onChange={handleChange} type="text" name="field2" className="formInput" placeholder="Enter Text" value={formData.field2}/>
                <button onClick={getMemeUrl} className='formButton'>Get A New Meme Image</button>
            </div>
            <div className='memeContainer'>
                <img src={memeImage.memeUrl} alt='memeImage' className='memeImage'></img>
                <h2 className='topText'>{formData.field1}</h2>
                <h2 className='bottomText'>{formData.field2}</h2>
            </div>
        </main>
    )
}