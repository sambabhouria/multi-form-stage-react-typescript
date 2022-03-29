import * as C from './styles'
import {useNavigate} from 'react-router-dom'
import { useForm, FormActions } from '../../context/FormContext'
import { Theme } from '../../components/Theme/intex'
import { ChangeEvent, useEffect } from 'react'


export const FormStep1 = () => {

    let navigate = useNavigate();
    const { state, dispatch} = useForm()

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value

        })
    }

    const handleNextStep = () =>{
        if(state.name !== '') {
            navigate('/step2')
        } else{
            alert('remplir correctement les données')
        }

    }

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })

    },[])


    return(
        <Theme>
            <C.Container>
                <p className='passo'>Passo 1/3</p>
                <h2>Commençons par votre nom</h2>
                <p>Remplissez le champ avec votre nom</p>

                <label>Ton nom complet </label>
                <input
                    type="text"
                    autoFocus
                    onChange={handleNameChange}

                    />

                <button onClick={handleNextStep}>Suivant</button>
            </C.Container>
        </Theme>
    )
}
