import { v4 } from "uuid"
import { vehicleConditions } from "./helpers.js"

export class Vehicle {
    constructor(type, brand, model, course, price, condition) {
        this.type = type
        this.brand = brand
        this.model = model
        this.course = course
        this.price = Number(price)
        this.condition = condition

        this.id = v4()
    }

    generateItem() {
        return `
            <div id="${this.id}" class="col-md-12 my-md-2 col-lg-4">
                <div class="card border border-secondary">
                    <div class="card-title text-center"><h3 class="my-2">${this.brand} ${this.model} <i class="fas fa-car"></i></h3></div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item test">Type: ${this.type}</li>
                        <li class="list-group-item">Course: ${this.course} km</li>
                        <li class="list-group-item">Price: ${this.price} zł</li>
                        <li class="list-group-item">Condition: ${this.condition}</li>
                    </ul>
                    <div class="card-footer row bg-transparent">
                        <div class="col-md-6 col-lg-4">
                            <button id="${this.id}-edit-button" class="btn btn-secondary w-100">Edit <i class="fas fa-edit"></i></button>
                        </div>
                        <div class="col-md-6 col-lg-4 offset-lg-4">
                            <button id="${this.id}-delete-button" class="btn btn-danger w-100">Delete <i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div id="settings-container" class="d-none p-2">
                        <div class="d-flex">
                            <input id="${this.id}-new-price-input" placeholder="New Price" class="form-control" type="number"/>
                            <button id="${this.id}-change-price-button" class="ml-2 btn btn-success" style="width: 150px;">Edit price</button>
                        </div>
                        <div class="mt-1">
                            <select id="${this.id}-condition-select" class="form-control">
                                ${vehicleConditions.map((condition) => `<option>${condition.label}</option>`).join("")}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    assignDefaultInputValue() {
        const newPriceInput = document.getElementById(`${this.id}-new-price-input`)
        newPriceInput.value = this.price
    }

    changePrice() {
        const newPriceInput = document.getElementById(`${this.id}-new-price-input`)
        this.price = Number(newPriceInput.value).toFixed(0)

        const liElements = Array.from(document.getElementById(this.id).querySelector("ul").getElementsByTagName("li"))
        const priceElement = liElements.find((li) => li.innerHTML.includes("Price:"))
        if (priceElement) {
            priceElement.innerHTML = `Price: ${this.price} zł`
        }
    }

    changeCondition(newCondition) {
        this.condition = newCondition
        const ulElements = document.getElementById(this.id).querySelector("ul")
        const liElements = ulElements?.children && Array.from(ulElements.children)
        liElements?.forEach((li) => {
            if (li.innerHTML.includes("Condition:")) {
                li.innerHTML = `Condition: ${newCondition}`
            }
        })
    }
}