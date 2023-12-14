import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import {useMutation} from "react-query";
import editRequest from "../common/api/editRequest";

interface Post {
    id: number;
    title: string;
    body: string
}

const initialValues = {
    id:0,
    title: '',
    body: ''
}

const validationSchema: Yup.ObjectSchema<Post> = Yup.object().shape({
    id: Yup.number().min(0, 'Id cannot be negative').required(),
    title: Yup.string().required(),
    body: Yup.string().required()
})

const EditPost = () =>{

    const EditPostMutation = useMutation(
        (data:Post) => editRequest(data.id, data)
    )

    const handleSubmit = (values: Post, actions:any) =>{
        EditPostMutation.mutate(values);
        console.log('Post edited', values)
        actions.resetForm();
        actions.setSubmitting(false);
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                >
                {({isValid}) =>
                    <Form className='edit-container'>
                        <label>Editing a post: </label>
                        <div>
                            <label htmlFor='id'>ID: </label>
                            <Field type ="number" id = 'id' name = 'id'/>
                            <ErrorMessage name='id' component='div'/>
                        </div>
                        <div>
                            <label htmlFor='title'>Title: </label>
                            <Field type ="text" id = 'title' name = 'title'/>
                            <ErrorMessage name='title' component='div'/>
                        </div>
                        <div>
                            <label htmlFor='body'>Body: </label>
                            <Field type ="text" id = 'body' name = 'body'/>
                            <ErrorMessage name='body' component='div'/>
                        </div>
                        <button type = 'submit' disabled={!isValid }>Send changes</button>
                    </Form>
                }
            </Formik>
        </>
    )
}

export default EditPost;