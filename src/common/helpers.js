export const vehicleConditions = [
    {
        key: "Used",
        label: "Used"
    },
    {
        key: "New",
        label: "New"
    },
    {
        key: "Wrecked",
        label: "Wrecked"
    }
]


export const addInputsValidation = (inputErrors) => {
    console.log("Put validations here <---", { inputErrors })
}

export const removeInputsValidation = () => {
    console.log("Remove validations here <---")
}

export const setDefaultInputsValue = () => {
    const newVehicleType = document.getElementById("type-select")
    const newVehicleCondition = document.getElementById("condition-select")

    const inputs = [
        document.getElementById("brand-input"),
        document.getElementById("model-input"),
        document.getElementById("course-input"),
        document.getElementById("price-input")
    ]

    inputs.forEach((input) => input.value = "")

    newVehicleType.value = "Truck"
    newVehicleCondition.value = "New"
}