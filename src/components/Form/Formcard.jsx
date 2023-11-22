import React from 'react'

const Formcard = () => {

    const formcarddata = [
        {
            title: "Specialized in german education!",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, cupiditate sapiente! Doloribus, nihil. Eaque maiores nisi ex, hic ab odio.",
            bgcolor: "#fae67c",
            icon: "fa-regular fa-message"
        },
        {
            title: "Addmision In desired Courses.",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, cupiditate sapiente! Doloribus, nihil. Eaque maiores nisi ex, hic ab odio.",
            bgcolor: "#f5bec2",
            icon: "fa-solid fa-medal"
        },
        {
            title: "Asistance for visa and leaving.",
            para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, cupiditate sapiente! Doloribus, nihil. Eaque maiores nisi ex, hic ab odio.",
            bgcolor: "#a0e6e2",
            icon: "fa-solid fa-plane-departure"
        }
    ]


    return (
        <div>
            <h1>Why Suvidha Foundation?</h1>

            {
                formcarddata.map((e) => {
                    return (
                        <div className="formcard cardbody" style={{background:`${e.bgcolor}`}}>
                            <i className={e.icon}></i>
                            <div>
                                <h3>{e.title}</h3>
                                <p>{e.para}</p>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Formcard
