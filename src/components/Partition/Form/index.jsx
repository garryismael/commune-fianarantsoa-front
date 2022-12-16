import {
	Button,
	Card,
	CardContent,
	CardHeader, TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { usePartitionForm } from "../../../hooks/partition";
import { appendPartition,updatePartition } from "../../../redux/partitionSlice";
import { addPartition, editPartition } from "../../../services/partition";

const PartitionForm=(props)=>{
    return(
        
        <div className="">
         
            <Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
                <form className='' onSubmit={props.handleSubmit}>
						<TextField
							id='nom'
							label='Nom'
							name='nom'
							value={props.values?.nom}
							variant='outlined'
							onChange={props.onChange}
						/>
                        <Button
							variant='contained'
							className='button-form'
							type='submit'>
							{props.button}
						</Button>
                        </form>
                </CardContent>
                </Card>
                
                
        </div>
    );
};
export const PartitionAdd=(props)=>{
    const[values, onChange]=usePartitionForm();
    const dispatch=useDispatch();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await addPartition(values);
            dispatch(appendPartition(response.data));
            props.handleClose();

        }catch(errors){
            console.error(errors);
        }
    };

    return (
        <PartitionForm
            title='Ajouter une partition'
            values={values}
            handleSubmit={handleSubmit}
            oneChange={onChange}
            />
        );
    };
    
    export const PartitionEdit = (props) => {
        const [values, onChange] = usePartitionForm(props.partition);
        const dispatch = useDispatch();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await editPartition(props.partition.id, values);
                dispatch(updatePartition(response.data));
                props.handleClose();
            } catch (errors) {
                console.error(errors);
            }
        };
    
        return (
        
            <PartitionForm
                title='Modifier une partition'
                values={values}
                button='Modifier'
                handleSubmit={handleSubmit}
                onChange={onChange}
            />
        );
    };
    
    export default PartitionForm;
    