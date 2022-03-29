import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {useForm, FormActions} from '../../context/FormContext'
import { useEffect} from 'react'
import {ReactComponent as CheckIcon} from '../../svgs/check.svg'
import {useNavigate} from 'react-router-dom'

export const FormStep4 = () => {
    const {state, dispatch} = useForm()
    let navigate = useNavigate();

   
    useEffect(()=>{
        if(state.name === '') {
            navigate('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
        

    },[])


    return(
        <Theme>
            <C.Container>
                
                <h2>Toutes nos félicitations</h2>
                <p>Inscription envoyée avec succès!</p>

                <C.IconArea>
                   <CheckIcon fill="rgb(91, 24, 153)" width={120} height={120}/>
                </C.IconArea>

                <p className='check-email'>Nous avons envoyé un e-mail à: <b>{state.email}</b> avec confirmation d'inscription</p>
                

            </C.Container>
        </Theme>
    )
}
