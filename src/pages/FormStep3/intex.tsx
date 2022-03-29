import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {Link, useNavigate} from 'react-router-dom'
import {useForm, FormActions} from '../../context/FormContext'
import {ChangeEvent, useEffect} from 'react'

export const FormStep3 = () => {
    const {state, dispatch} = useForm()
    let navigate = useNavigate();

    const handleNextStep = () =>{
        if(state.email !== '' && state.github !== '') {
            navigate('/step4')
        } else{
            alert('remplir correctement les données')
        }

    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    useEffect(()=>{
        if(state.name === '') {
            navigate('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
        

    },[])

    return(
        <Theme>
            <C.Container>
                <p className='passo'>Étape 3/3</p>
                <h2>Légale {state.name}, où te trouve-t-on?</h2>
                <p>Remplissez vos coordonnées afin que nous puissions vous contacter.</p>

                <label>Quel est votre e-mail?</label>
                <input 
                type="email" 
                onChange={handleEmailChange}
                />

                <label>Quel est votre GitHub?</label>
                <input 
                type="url" 
                onChange={handleUrlChange}
                />

                <div>
                    <Link to='/step2'>Retourner</Link>
                    <button onClick={handleNextStep}>Finaliser</button>
                </div>

            </C.Container>
        </Theme>
    )
}
