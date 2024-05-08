import { PropsWithChildren, useState } from "react";

interface DutiesList {
    duties: {
        id: string,
        name: string
    }[],
    title: string,
    handelDelete: (id: string) => void,
    getDuty: (id: string, name: string) => void
}

interface Duty {
    id: string;
    name: string;
}

const DutyList = (props: DutiesList) => {
    const [duties, setDuties] = useState(props.duties);

    return ( 
        <div className="duty-list" data-testid="duties-1">
            <h2>{ props.title }</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { props.duties.map((duty: any) => (
                        <tr key={duty.id}>
                            <td>{duty.id}</td>
                            <td>{duty.name}</td>
                            <td><button onClick={() => props.getDuty(duty.id, duty.name)}>Edit</button></td>
                            <td><button onClick={() => props.handelDelete(duty.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default DutyList;