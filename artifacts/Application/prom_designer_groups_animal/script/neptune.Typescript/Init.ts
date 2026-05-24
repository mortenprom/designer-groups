// neptune.Shell.attachInit((data: any) => {
//     console.log("prom_designer_groups_animal", "init", data?.name || "");
//     modelAnimal.setData({
//         icon: data?.icon || "sap-icon://fas/dragon",
//         name: data?.name || "Dragon",
//     });
// }, null);

neptune.Shell.attachBeforeDisplay((data: any) => {
    console.log("prom_designer_groups_animal", "beforeDisplay", data?.name || "");
    modelAnimal.setData({
        icon: data?.icon || "sap-icon://fas/dragon",
        name: data?.name || "Dragon",
    });
});
