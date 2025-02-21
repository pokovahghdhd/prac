import { FilterCheckbox } from "./filter-checkbox";




interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <FilterCheckbox value="1" text="" /> 
            <FilterCheckbox value="2" text="" /> 
        </div>

);
}
