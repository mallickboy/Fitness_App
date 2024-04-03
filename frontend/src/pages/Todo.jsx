import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Todo() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const todoList = state.todoList;
    const email = state.email;

    const [sleepButton, setSleepButton] = useState("Start Sleep Timer");

    const [exerciseCount, setExerciseCount] = useState({});
            
    useEffect(() => {        
        todoList.map((item) => {
            const copy = exerciseCount;
            copy[item] = { count: 0 };                   
            setExerciseCount(copy);
        })
    }, [])

    function handleOnChange(count, item) {
        const copy = exerciseCount;
        copy[item] = { count: count };
        setExerciseCount(copy);
    }    

    return (
        <div>
            <div> {todoList} </div>
            Enter the counts of the exercises: <br />
                {todoList.map((item) => {
                    return <div>
                        {item} <input type="number" step="1" onChange={(e) => handleOnChange(e.target.value, item)} />
                    </div>
                })}

            <button onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        todoList: todoList,
                        exerciseCount: exerciseCount,
                        email: email
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(async function(res) {
                        const todoList = await res.json();                    
                        
                    })
            }}> Save </button> <br /> <br />

            {/*<button onClick={() => {
                fetch("http://localhost:3000/sleep", {
                    method: "POST",
                    body: JSON.stringify({
                        todoList: todoList,
                        exerciseCount: exerciseCount,
                        email: email
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(async function(res) {
                        const todoList = await res.json();                    
                        
                    })
            }}> {sleepButton} </button>*/}
        </div>
    )
}

export default Todo