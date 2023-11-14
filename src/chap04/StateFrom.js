import { useState } from 'react';

export default function StateFrom() {
    const [form, setFrom] = useState({
        name:'テスト太郎',
        age:18
    });

    const handleForm = e => {
        setFrom({
            ...form,
            [e.target.name]: e.target.value,
            
        });
    };

    const show = () => {
        console.log(`こんにちは、名前:${form.name}年齢:${form.age}`);
    }

    return(
        <form>
            <div>
                <label htmlFor="name">名前:</label>
                <input id="name" name="name" type="text" onChange={handleForm} value={form.name}/>
            </div>
            <div>
            <label htmlFor="age">名前:</label>
                <input id="age" name="age" type="number" onChange={handleForm} value={form.age}/>                
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
            <p>こんにちは、{form.name}({form.age})さん</p>
        </form>
    );

}