<script lang="ts">
function portal(node:HTMLElement) {
    function update(){
        let target: HTMLBodyElement | null;
        target = document.querySelector("body");
        target?.appendChild(node);
        node.hidden = false;
    }

    function destroy(){
        if(node.parentNode){
            node.parentNode.removeChild(node)
        }
}
update()
return {update, destroy}
}
</script>
<div hidden use:portal>
    <slot> </slot>
</div>