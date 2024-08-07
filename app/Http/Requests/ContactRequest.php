<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|min:2|max:70',
            'email' => 'required|email|min:6|max:30',
            'message' => 'required|min:15|max:500'
        ];
    }
    public function messages()
    {
        return [
            'username.required' => 'Введите ваше имя',
            'email.required' => 'Введите вашу почту',
            'message.required' => 'Задайте Ваш вопрос'
        ];
    }
}
