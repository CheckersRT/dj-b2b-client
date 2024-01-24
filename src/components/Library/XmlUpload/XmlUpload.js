export default function XmlUpload({params}) {
    return (
        <form onSubmit={(event) => handleSubmit(event, xmlFile)}>
        <label htmlFor="xmlUpload"></label>
        <input
          name="xmlUpload"
          type="file"
          onChange={(event) => setXmlFile(event.target.files[0])}
        />
        <button type="submit">Upload XML</button>
      </form>
    )
}