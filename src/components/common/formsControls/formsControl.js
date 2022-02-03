import React from "react";
import style from "./formsControl.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
    // Так как нам часто понадобится проверка на наличие ошибки, прописываем переменную, с данными о которой находятся в meta
    //Условие ошибки если элемент был тронут и есть ошибка
    const hasError = meta.touched && meta.error;
    //div у которого при возникновении ошибки будет добавлятся определенный класс, а при отсутствии просто "", таким образом мы можем стилизовать его при возникновении ошибки
    return <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <div>
            {/* Если этой компонентой FormControl обернуть любой тег, например textarea или imput, то тогда этот тег появится в props.child, что дает возможность 
            уменьшать дублирование */}
            {props.children}
        </div>
        {/* Если есть ошибка, то выведи div с текстом ошибки, сам текст находится в meta.error*/}
        {hasError && <div className={style.errorMessage}>
            {meta.error}</div>}
    </div>
}
//Создаем специальную компоненту Textarea
export const Textarea = (props) => {
    //разкладываем props на элементы для дальнейшего более удобного использования с помошью rest оператора
    const { input, meta, child, ...restProps } = props;
    //оборачиваем textarea компонентой FormControl, для того что бы input появился в props.child и распределяем между ними данные из props
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}
//Спечиальная компонента которая отрисовывается в Field на странице логанизации
export const Input = (props) => {
    //разкладываем props на элементы для дальнейшего более удобного использования с помошью rest оператора
    const { input, meta, child, ...restProps } = props;
    //оборачиваем input компонентой FormControl, для того что бы input появился в props.child и распределяем между ними данные из props
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}