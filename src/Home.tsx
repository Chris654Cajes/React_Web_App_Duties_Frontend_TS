import useFetch from "./useFetch";
import DutyList from "./DutyList";
import Create from "./Create";
import { FormEvent, useEffect, useState } from "react";

interface Duty {
    id: string;
    name: string;
}

const Home = () => {
    const { data: duties, isPending, error } = useFetch('http://localhost:8000/api/v1/duty');
    const [duty, setDuty] = useState({ id: "", name: ""});
    const [dutiesList, setDutiesList] = useState<Duty[]>([]);

    const handleDelete = (id: string) => {
        setDutiesList(dutiesList.filter((duty) => duty['id'] !== id ));
    }

    const addDuty = (id: string, name: string, e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setDuty({ id: id, name: name });

        if (!dutiesList.find((duty) => duty['id'] === id)) {
            dutiesList.push({ id: id, name: name})
            setDutiesList(dutiesList);
        } else {
            const foundIndex = dutiesList.findIndex(duty => duty.id === id);
            dutiesList[foundIndex]['name'] = name;

            setDutiesList(dutiesList);
        }
        
        if (duty) {
            duty.id = "";
            duty.name = "";
        }
    }

    const getDuty = (id: string, name: string) => {
        setDuty({ id: id, name: name });
    }

    useEffect(() => {
        if (duties) {
            setDutiesList(duties['data'])
        }
    }, [duties]);

    return ( 
        <div className="duty-list">
            <div className="inline">
                {duties && <DutyList duties={dutiesList} title="All Duties!" handelDelete={handleDelete} getDuty={getDuty} />}
            </div>
            <div className="inline">
                <Create duty={duty} addDuty={addDuty} />
            </div>
        </div>
     );
}
 
export default Home;