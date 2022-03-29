import * as C from './styles'
import { useNavigate, Link } from "react-router-dom";
import { Theme } from '../../components/Theme/intex'
import { SelectOption } from '../../components/SelectOption'
import {useForm, FormActions} from '../../context/FormContext'
import {useEffect} from 'react'


export const FormStep2 = () => {
    const {state, dispatch} = useForm()
    let navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/step3')

    }

    useEffect(()=>{
        if(state.name === '') {
            navigate('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }

    },[])

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })

    }

    return(
        <Theme>
            <C.Container>
            <p className='passo'>Étape 2/3</p>
            <h2>{state.name}, ce qui vous décrit le mieux?</h2>
            <p>Choisissez la meilleure option qui décrit votre niveau actuel</p>

            <SelectOption
            title="Je suis un débutant"
            description="J'ai commencé à programmer il y a moins de 2 ans"
            icon="🥳"
            selected={state.level === 0}
            onClick={()=>setLevel(0)}
            />

             <SelectOption
                    title="Je suis un programmeur"
                    description="Je programme depuis 2 ans ou plus"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

            <div>
                <Link to='/'>Retourner</Link>
                <button onClick={handleNextStep}>Suivant</button>
            </div>


            </C.Container>
        </Theme>
    )
}
