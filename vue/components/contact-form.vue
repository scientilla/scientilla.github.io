<template>
    <div class="contact-form-container">
        <form action="" class="contact-form">
            <ul class="field-listing">
                <li v-for="field in fields" class="field-row">
                    <label :for="field.name">{{ field.label }}:</label>
                    <input
                        :type="field.type"
                        :name="field.name"
                        :id="field.name"
                        :placeholder="field.placeholder"
                        v-if="field.type === 'text' || field.type === 'email'">
                    <textarea
                        :name="field.name"
                        :placeholder="field.placeholder"
                        v-if="field.type === 'textarea'"></textarea>
                    <span class="field-info">
                        <i class="fas fa-info-circle"></i>
                    </span>
                </li>
                <li>
                    <input type="checkbox" name="terms" id="terms">
                    <label for="terms">{{ checkbox.label }}</label>
                </li>
                <li>
                    <button
                        type="submit"
                        class="btn btn-primary btn-sm">{{ submit.text }}</button>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                fields: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Please insert your name',
                        label: 'Name',
                        tooltip: 'Tooltip text'
                    }, {
                        name: 'email',
                        type: 'email',
                        placeholder: 'Please insert your email',
                        label: 'Email',
                        tooltip: 'Tooltip text'
                    }, {
                        name: 'message',
                        type: 'textarea',
                        placeholder: 'Please insert your message',
                        label: 'Message',
                        tooltip: 'Tooltip text'
                    }
                ],
                checkbox: {
                    label: 'I agree ...'
                },
                submit: {
                    text: 'Send'
                }
            }
        }
    }
</script>