import {Formik, Form, Field, ErrorMessage, FieldArray} from "formik";
import * as Yup from 'yup'
import {useMutation} from "react-query";
import deletePosts from "./DeletePosts";
import deleteRequest from "../common/api/deleteRequest";

interface Post {
    id: number;
}

const initialValue = {
    id: 0,
    additionalIDs: [0]
}

const validationSchema: Yup.ObjectSchema<Post> = Yup.object().shape({
    id: Yup.number().min(0, 'The id cannot be negative').required(),
    additionalIDs: Yup.array().of(Yup.number().min(0, 'The id cannot be negative')).required()
})

const DeletePosts = () =>{

    const deletePostMutation = useMutation(
        (id: number) =>deleteRequest(id)
    )
    const handleSubmit = async(values:{id: number; additionalIDs: number[]})=>{
        await deletePostMutation.mutateAsync(values.id);

        for (let i of values.additionalIDs){
            await deletePostMutation.mutateAsync(i);
        }
    }

    return (
        <Formik
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}

        >
            {({isValid, values}) =>
                <Form>
                    <label>Delete Post or Posts:</label>
                    <div>
                        <label htmlFor='id'>ID: </label>
                        <Field type = 'number' id = 'id' name = 'id'/>
                        <ErrorMessage name='id' component='div'/>
                    </div>
                    <FieldArray name='additionalIDs'>
                        {({push, remove}) =>(
                            <div>
                                {values.additionalIDs.map((id:number, index: number)=>(
                                    <div key = {index}>
                                        <label htmlFor={`additionalIDs.${index}`}>Additional IDs: </label>
                                        <Field type = 'number' id = {`additionalIDs.${index}`} name = {`additionalIDs.${index}`}/>
                                        <button type='button' onClick={()=> remove(index)}>
                                            Remove ID field
                                        </button>
                                    </div>
                                ))}
                                <button type = 'button' onClick={() =>push(0)}>Add ID field</button>
                            </div>
                        )}
                    </FieldArray>
                    <button type = 'submit' disabled={!isValid}>Delete</button>
                </Form>
            }
        </Formik>
    )
}

export default DeletePosts;