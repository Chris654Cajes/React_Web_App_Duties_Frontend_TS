import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Duty {
    duty: {
        id: string;
        name: string;
    },
    addDuty: (id: string, name: string, e: FormEvent<HTMLFormElement>) => void,
}

const Create = (props: Duty) => {
    const [ id, setId ] = useState('');
    const [ name, setName ] = useState('');

    useEffect(() => {
        setId(props.duty.id);
        setName(props.duty.name);
    }, [props.duty.id, props.duty.name]);

    return ( 
        <div className="create" data-testid="create-duties-1">
            <h2>Create / Edit Duty</h2>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => props.addDuty(id, name, e)}>
                <label>Duty ID:</label>
                <input type="text" value={id} required onChange={(e) => setId(e.target.value)} />
                <label>Duty Name:</label>
                <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                <button type="submit">Add Duty</button>
                <button onClick={() => {
                    setId("");
                    setName("");
                }}>Reset</button>
            </form>
        </div>
     );
}
 
export default Create;