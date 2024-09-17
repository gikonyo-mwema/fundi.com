import { Input } from "../ui/input";
import { Label } from "../ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

/**
 * CommonForm component renders a dynamic form based on the provided form controls.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Array} props.formControls - Array of form control objects, each containing the configuration for a form element.
 * @param {Object} props.formData - The current state of the form data.
 * @param {Function} props.setFormData - Function to update the form data state.
 * @param {Function} props.onSubmit - Function to handle form submission.
 * @param {string} props.buttonText - Text to display on the submit button.
 * @param {boolean} props.isBtnDisabled - Flag to disable the submit button.
 *
 * @returns {JSX.Element} The rendered form component.
 *
 * @example
 * const formControls = [
 *   { name: 'username', label: 'Username', componentType: 'input', type: 'text', placeholder: 'Enter your username' },
 *   { name: 'password', label: 'Password', componentType: 'input', type: 'password', placeholder: 'Enter your password' },
 *   { name: 'gender', label: 'Gender', componentType: 'select', options: [{ id: 'male', label: 'Male' }, { id: 'female', label: 'Female' }] },
 *   { name: 'bio', label: 'Bio', componentType: 'textarea', placeholder: 'Tell us about yourself' }
 * ];
 * const formData = { username: '', password: '', gender: '', bio: '' };
 * const setFormData = (data) => console.log(data);
 * const onSubmit = (event) => { event.preventDefault(); console.log('Form submitted'); };
 *
 * <CommonForm
 *   formControls={formControls}
 *   formData={formData}
 *   setFormData={setFormData}
 *   onSubmit={onSubmit}
 *   buttonText="Register"
 *   isBtnDisabled={false}
 * />
 */
function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;
      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;
      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;