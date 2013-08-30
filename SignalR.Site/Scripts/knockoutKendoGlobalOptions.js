ko.bindingHandlers.kendoGrid.options = {
    autoBind: true,
    filterable: false,
    groupable: false,
    height: "300px",
    pageable: true,
    resizeable: true,
    selectable: "single, row",
    sortable: {
        mode: "single",
        allowUnsort: false
    }
}

ko.bindingHandlers.kendoTabStrip = {
    animation: {
        // fade-out current tab over 1000 milliseconds
        close: {
            duration: 1000,
            effects: "fadeOut"
        },
        // fade-in new tab over 500 milliseconds
        open: {
            duration: 500,
            effects: "fadeIn"
        }
    }
}