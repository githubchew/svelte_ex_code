<script>
    import BlankRow from "$lib/components/BlankRow.svelte";
import InvoiceRowHeader from "./InvoiceRowHeader.svelte";

</script>
<div>
    <h2 class="font-handwriting text-4xl font-bold text-caribbeanGreen">Add your first Invocie</h2>
    <!-- invoice header -->
<InvoiceRowHeader className="text-slate-300" />

    <!-- blank rows -->
    <BlankRow />
    <BlankRow />
    <BlankRow /> 
</div>