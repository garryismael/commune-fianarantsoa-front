import {
	Button,
	Card,
	CardContent,
	CardHeader, TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useCategorieActiviteForm } from "../../../hooks/categorieActivite";
import { appendCategorieActivite,updateCategorieActivite } from "../../../redux/categorieActiviteSlice";
import { addCategorieActivite, editCategorieActivite } from "../../../services/categorieActivite";
import "./index.css"

const CategorieActiviteForm=(props)=>{
    return(
        <div className='categorie-activite'>
            <Card sx={{ width: "500px", margin: "auto" }}>
				<CardHeader title={props.title} />
				<CardContent>
                <form className='categorie-activite-form' onSubmit={props.handleSubmit}>
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
export const CategorieActiviteAdd=(props)=>{
    const[values, onChange]=useCategorieActiviteForm();
    const dispatch=useDispatch();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response= await addCategorieActivite(values);
            dispatch(appendCategorieActivite(response.data));
            props.handleClose();

        }catch(errors){
            console.error(errors);
        }
    };

    return (
        <CategorieActiviteForm
            title='Ajouter une Catégorie '
            values={values}
            button='Ajouter'
			create={true}
            handleSubmit={handleSubmit}
            oneChange={onChange}
            />
        );
    };
    
    export const CategorieActiviteEdit = (props) => {
        const [values, onChange] = useCategorieActiviteForm(props.categorieactivite);
        const dispatch = useDispatch();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await editCategorieActivite(props.categorieactivite.id, values);
                dispatch(updateCategorieActivite(response.data));
                props.handleClose();
            } catch (errors) {
                console.error(errors);
            }
        };
    
        return (
            <CategorieActiviteForm
                title='Modifier une catégorie'
                values={values}
                button='Modifier'
                create={false}
                handleSubmit={handleSubmit}
                onChange={onChange}
            />
        );
    };
    
    export default CategorieActiviteForm;
    